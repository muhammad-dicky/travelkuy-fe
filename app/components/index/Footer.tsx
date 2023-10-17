import AcUnitIcon from '@mui/icons-material/AcUnit';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content text-xl ">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 text-xl">
                <aside className="items-center grid-flow-col">
                    <AcUnitIcon />
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><InstagramIcon /></a>
                        <a><FacebookIcon /></a>
                        <a><YouTubeIcon /></a>
                    </div>
                </nav>
            </footer>
        </>
    )
}