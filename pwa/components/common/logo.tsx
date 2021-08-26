import Image from 'next/image';
import Container from '@material-ui/core/Container';

export default function Logo() {
  return (
    <>
      <Container>
        <div style={{margin: 'auto',width: '100px'}}>
          <Image src="/../public/logo.png" height={100} width={100} alt="Picture of the author"/>
        </div>
      </Container>
    </>
  )
}
