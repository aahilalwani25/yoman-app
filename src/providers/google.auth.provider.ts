import googleSigninConfiguration from "../config/google-config";

const googleSignin = googleSigninConfiguration();

interface GoogleSignInResponse {
    id: string;
    name: string | null;
    email: string;
    photo: string | null;
    familyName: string | null;
    givenName: string | null;
}

export async function signinWithGoogle():Promise<GoogleSignInResponse|null> {
    await googleSignin.hasPlayServices();
    const response = await googleSignin.signIn();
    if (response.type === 'success') {
        const user = { ...response.data?.user };
        return user
    }
    return null
}