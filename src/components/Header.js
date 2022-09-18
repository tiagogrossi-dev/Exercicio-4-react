import { Link } from "react-router-dom";
import * as Styles from "../styles";

export function Header() {
	return (
		<Styles.MainHeader>
			<h1>Listagem de filmes</h1>

			<Styles.Nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</Styles.Nav>
		</Styles.MainHeader>
	);
}