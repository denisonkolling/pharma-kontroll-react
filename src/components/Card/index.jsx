import { Wrapper, CardTitle, Gallery, Content, Img, CardText, CardPrice, CardButton } from "./styles";

const Card = () => {
	return (
		<>
			<Wrapper>
				<Gallery>
					<Content>
						<Img src="./assets/xbox.jpg" alt="" />
						<CardTitle>Video Game</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							expedita obcaecati error sint dignissimos possimus distinctio fuga
							quia molestias!
						</CardText>
						<CardPrice>R$ 1.399.99</CardPrice>

						<CardButton>Compre agora!</CardButton>
					</Content>
				</Gallery>
			</Wrapper>
		</>
	);
};

export default Card;
