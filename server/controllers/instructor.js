import Stripe from 'stripe';
import User from '../models/user';

export const makeInstructor = async (req, res) => {
  const user = await User.findById(req.currentUser._id).exec();
  // if(!user.stripe_account_id){
  //   const account = await Stripe.accounts.create({type: "express"})
  //   console.log(`Stripe account: ${account}`)
  //   User.stripe_account_id = await account.id
  //   await User.save();
  // }

  // create account base on account id for the FrontEnd
  res.send({ sanityCheck: true });
};
