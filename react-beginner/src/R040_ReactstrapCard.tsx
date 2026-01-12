import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

export default function R040_ReactstrapCard() {
  return (
    <div>
      <Card>
        <CardImg
          top
          src="https://picsum.photos/1600/900"
          alt="Card Image"></CardImg>
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card Subtitle</CardSubtitle>
          <CardText>Card Text</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
