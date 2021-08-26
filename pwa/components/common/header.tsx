import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@material-ui/core/Container';

export default function Header() {
  return (
    <header>
        <Logo/>
        <MainMenu/>
    </header>
  );
}
