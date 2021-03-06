import Head from 'next/head';
import Otsikko from '../components/Otsikko';
import Image from 'next/image';
import styled from '../styles/esittelyjapalvelut.module.css';

export default function esittely() {
	return (
		<div>
			<Head>
				<title>Esittely</title>
			</Head>
			<Otsikko otsikko={'Esittely'} />
			<article className={styled.article}>
				<div className={styled.div}>
					<Image src="/images/muut/Janskukuva.jpg" width={728} height={621} alt="jaanan kuva" />
				</div>
				<div className={styled.div}>
					<p className={styled.paragraf}>
						Janskun Lanka ja Ompelupaja on saanut varsinaisesti alkunsa jo yli 20 vuotta sitten. Olin
						pitkään forssalaisen Lankapisteen vakioasiakas ja kävin toisinaan myös tuuraamassa myymälässä.
						Kun sain tilaisuuden ostaa Lankapiste Oy:n liiketoiminnan, tartuin heti koukkuun. Rakkaasta
						harrastuksesta tuli siten päätoiminen työni, joka ei oikeastaan edes tunnu työltä, niin mukavaa
						tämä on.
					</p>
					<p className={styled.paragraf}>
						Käsityöharrastuksella on suvussani pitkät perinteet ja tuntuu mahtavalta, että ravintola-,
						kauppa- ja hoitotyön jälkeen pääsen nyt toteuttamaan unelmaani.
					</p>
					<p className={styled.paragraf}>
						Liikkeeni lankavalikoima on todella monipuolinen. Lankojen ja tarvikkeiden lisäksi mukaan saa
						aina ohjeet ja vinkit käsitöissä etenemiseen. Lisäksi liikkeestäni saa korjausompelupalvelua.
						Suosituimpia palveluja ovat vetoketjun vaihto ja housujen lahkeiden lyhennys. Lisäksi löytyy
						pesulapalvelua.
					</p>
					<p className={styled.paragraf}>
						Yksi sydäntäni lähellä oleva juttu on hyväntekeväisyys ja mielelläni järjestän erilaisia
						tempauksia sen suhteen. Esim. sytomyssyjä ja vauvojen ensipipoja on porukalla tehty ja
						toimitettu tarvitseville.
					</p>

					<p className={styled.paragraf}>
						Liikkeestäni voi aina tulla kysymään neuvoja kaikkiin käsityöpulmiin. Kaikkea ei voi eikä
						tarvitsekaan osata, mutta yhdessä pähkäilemällä asiat ratkeavat!
					</p>
					<p className={styled.paragraf}>Tervetuloa poikkeamaan!</p>
					<p className={styled.paragraf}>Terkuin Jaana</p>
				</div>
			</article>
		</div>
	);
}
