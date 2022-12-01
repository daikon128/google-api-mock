import type {NextPage} from 'next'
import {useRouter} from "next/router";

const Login: NextPage = () => {
  const router = useRouter()
  const gotoNextPage = () => {
    router.push("/googleInputPassword")
  }
  return (
    <div>
      login
      <input type="email" autoComplete="username" spellCheck="false"
             aria-label="メールアドレスまたは電話番号" name="identifier" autoCapitalize="none"
             id="identifierId" />
      <button onClick={gotoNextPage}><span>次へ</span></button>
    </div>
  )
}

export default Login
