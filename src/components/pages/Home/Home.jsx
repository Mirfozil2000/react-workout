import Button from "../../ui/Button/Button";
import Counters from "../../ui/Counters/Counters";
import Layout from "../../common/Layout";
import bgImage from "../../../images/home-bg.jpg";
import styles from './Home.module.scss';

const Home = () => {
	return (
		<Layout height='100%' bgImage={bgImage}>
			<Button text='New' type='main' callback={() => { }} />
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters />
		</Layout>
	)
}

export default Home