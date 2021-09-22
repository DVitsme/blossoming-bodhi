import queryString from 'query-string';

import User from '../models/user';
const Stripe = require('stripe')(process.env.STRIPE_SECERT);

export const makeInstructor = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id).exec();
    if (!user.stripe_account_id) {
      const account = await Stripe.accounts.create({ type: 'express' });
      console.log(`Stripe account: ${account}`);
      user.stripe_account_id = await account.id;
      await user.save();
    }
    console.log('Stripe account ID', user.stripe_account_id);
    // create account link base on account id to complete onboarding
    let accountLink = await Stripe.accountLinks.create({
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: 'account_onboarding'
    });
    console.log('Stripe account link', accountLink);
    accountLink = await Object.assign(accountLink, {
      'stripe_user[email]': user.email
    });
    res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);
  } catch (err) {
    console.log('Make Instructor Error:', err);
    res.send(err);
  }
};

export const getAccountStatus = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id).exec();
    const account = await Stripe.accounts.retrieve(user.stripe_account_id);

    // account.charges_enabled ensures the user entered everything correctly
    if (account.charges_enabled) {
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          stripe_seller: account,
          $addToSet: { role: 'Instructor' } // $addToSet stops duplicates
        },
        { new: true }
      ).exec();
      res.json(statusUpdated);
    } else {
      return res.status(401).send('Unauthorized');
    }
  } catch (err) {
    console.log('Get Account Status:', err);
    res.send(err);
  }
};
