import { authSignInGooglePopup } from '../lib/firebase';

export const handleLogInSocial = async (social) => {
  if (social === 'google') {
    try {
      const user = await authSignInGooglePopup();
      console.log(user);
      router.push('/');
    } catch (err) {
      console.log(`Sign Up error - Google: ${err}`);
    }
  }
  console.log(`clicked ${social}`);
};
