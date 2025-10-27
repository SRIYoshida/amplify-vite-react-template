import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('ja');
I18n.putVocabularies({
ja: {
    // サインイン画面
    'Username': 'メールアドレス',
    'Password': 'パスワード',
    'Email Address *': 'メールアドレス',
    'Enter your phone_number': '電話番号を入力してください',
    'Enter your Username': 'ユーザー名を入力してください',
    'Enter your Password': 'パスワードを入力してください',
    'Confirm Password': 'パスワードを確認',
    'Please confirm your Password': 'パスワードを再入力してください',
    'Reset Password': 'パスワードのリセット',
    'Enter your username': '名前（ID）を入力してください',
    'Sign In': 'サインイン',
    'Sign in': 'サインイン',
    'Sign Up': 'サインアップ',
    'Forgot your password?': 'パスワードをお忘れの方',
    'Reset password': 'パスワードをリセット',
    'No account?': 'アカウントを持っていない方',
    'Create account': 'アカウントを作成',
    'Create Account': 'アカウントを作成',
    'Have an account?': 'アカウントお持ちの方',
    'Confirm Sign up': 'サインアップの確認',
    'Back to Sign In': 'サインインに戻る',
    'Send code': 'コードを送信',
    'Sign in to your account': 'アカウントにサインイン ',
    'Sign Up to your account': 'アカウントを作成',
    'Enter your confirmation code': '検証コードを入力してください',
    'Enter your new password': '新しいパスワードを入力してください',
    'Enter your password': 'パスワードを入力してください',
    'Password cannot be empty': 'パスワードは必須入力です',
    'Please Sign In / Sign Up': 'サインインまたは新規登録をしてください',
    'User does not exist': 'ユーザーが存在しません',
    'Username cannot be empty': 'ユーザー名は必須入力です',
    'Username/client id combination not found.': 'ユーザー名が見つかりません',
    'Confirm': '送信',
    'Confirmation Code': '確認コード',
    'Resend Code': 'コードを再送',
    'We Emailed You': 'メールを送信しました',
    'Enter your code': '認証コード',
    'Password must have at least 8 characters': 'パスワードは8文字以上にしてください',
    'Your passwords must match': 'パスワードがマッチしません',
    'Password did not conform with policy: Password not long enough':'パスワードは8文字以上にしてください',
    "2 validation errors detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6; Value at 'password' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[\S]+.*[\S]+$": 'パスワードは8文字以上、大文字小文字を含む英数字を指定してください',
    'User does not exist.': 'ユーザーが存在しません',
    'Incorrect username or password.': 'ユーザー名またはパスワードが違います',
    'User is not confirmed.': 'ユーザーは検証されていません',
    'User already exists': 'ユーザーは既に存在します',
    'Invalid verification code provided, please try again.': '指定された確認コードが無効です。もう一度お試しください',
    'Invalid password format': 'パスワードのフォーマットが不正です',
    'Invalid phone number format': '不正な電話番号フォーマットです。 電話番号は次のフォーマットで入力してください: +12345678900',
    'An account with the given email already exists.': 'そのメールアドレスは既に存在します',
    'Password attempts exceeded': 'パスワード試行回数が超過しました',
    'Attempt limit exceeded, please try after some time.': '試行制限を超過しました。しばらくしてからもう一度お試しください',
    'CUSTOM_AUTH is not enabled for the client.': 'パスワードは必須です',
    'Password does not conform to policy: Password not long enough': 'パスワードは8文字以上を入力してください (8文字以上の大文字小文字を含む英数字)',
    'Password does not conform to policy: Password must have uppercase characters': 'パスワードには大文字を含めてください (8文字以上の大文字小文字を含む英数字)',
    'Password does not conform to policy: Password must have lowercase characters': 'パスワードには小文字を含めてください (8文字以上の大文字小文字を含む英数字)',
    'Password does not conform to policy: Password must have numeric characters': 'パスワードには数字を含めてください (8文字以上の大文字小文字を含む英数字)',
    "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6": 'パスワードは8文字以上、大文字小文字を含む英数字を指定してください',
  },
});
Amplify.configure(outputs);
ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <Authenticator hideSignUp>
      <App />
    </Authenticator>
  </React.StrictMode>
);