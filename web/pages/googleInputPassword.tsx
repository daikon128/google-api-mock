import type {NextPage} from 'next'

const Login: NextPage = () => {
  const toSuccess = () => {
    // jump to redirect page
  }
  return (
    <div >
      login
      <div className="Xb9hP">
        <input type="password"
               autoComplete="current-password" spellCheck="false"
               aria-label="パスワードを入力" name="Passwd" autoCapitalize="off" dir="ltr"
               data-initial-dir="ltr" data-initial-value=""/>
        <div aria-hidden="true">パスワードを入力</div>
      </div>
      <button onClick={toSuccess}><span>次へ</span></button>
    </div>
  )
}

export default Login
