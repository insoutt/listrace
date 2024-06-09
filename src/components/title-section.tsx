
interface Props {
  title: string
  description: string
}

const TitleSection = ({title, description}: Props) => {
  return (<div className="text-center">
    <h2 className="capitalize mb-6 text-gray-700">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>);
}

export default TitleSection;