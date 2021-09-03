import { authSignInGooglePopup } from '../lib/firebase';

export const handleLogInSocial = async (social) => {
  if (social === 'google') {
    const user = await authSignInGooglePopup();
    return user;
  }
  if (social === 'facebook') {
    // const user = await authSignInGooglePopup();
    return 'clicked facebook';
  }
  if (social === 'twitter') {
    // const user = await authSignInGooglePopup();
    return 'clicked twitter';
  }
};
