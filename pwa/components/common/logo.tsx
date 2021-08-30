import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

export default function Logo() {
  return (
    <>
      <Container>
        <div style={{margin: 'auto',width: '100px'}}>
          <Link href="/">
            <Image src="/../public/logo.png" height={100} width={100} alt="Picture of the author"/>
          </Link>
        </div>
      </Container>
    </>
  )
}
