import './headerNav.css'

export function HeaderNav () {
  const imageSize = '30px'

  return (
    <header>
      <a
        href='https://www.linkedin.com/in/daniel-mellado-hurtado/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='/assets/linkedin-mark.svg'
          alt='linkedin logo'
          width={imageSize}
          height={imageSize}
        />
      </a>
      <a
        href='https://github.com/DmelladoH/tic-tac-toe'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='/assets/github-mark-white.svg'
          alt='github logo'
          width={imageSize}
          height={imageSize}
        />
      </a>
    </header>
  )
}
