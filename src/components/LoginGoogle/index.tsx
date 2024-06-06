import axios from "axios"
import { useEffect, useRef } from "react"

const CALLBACK_URL = `http://localhost/oauth2/oidc/google?redirect_uri=/`

const LoginGoogle = () => {
  const loginGoogleElement = useRef<HTMLDivElement>(null)

  const handleCredentials = (credentials: any) => {
    axios.post(CALLBACK_URL, credentials, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        
      })
  }

  const initializeGci = () => {
    google.accounts.id.initialize({
      client_id: '1012294869866-d7lijc5gu0iv7rnkgn7jrghfheg9nmbm.apps.googleusercontent.com',
      ux_mode: 'redirect',
      context: 'signup',
      login_uri: CALLBACK_URL,
      callback: handleCredentials,
    })
    google.accounts.id.renderButton(
      loginGoogleElement.current!,
      { theme: 'outline', size: 'large', width: 400 } // customization attributes
    )
    google.accounts.id.prompt() // also display the One Tap dialog
  }

  useEffect(() => {
    if (!google) {
      return
    }

    initializeGci()
  })

  return (
    <div ref={loginGoogleElement}/>
  )
}

export default LoginGoogle