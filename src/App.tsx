import Card from './components/Card'
import CardBody from './components/CardBody'
import CardImage from './components/CardImage'
import '../public/image.svg'
import './App.css'

function App() {

  return (
    <div className='container'>
      <Card>
        <CardImage src='../public/image.svg' alt='' />
        <CardBody 
          title="Card title" 
          text="Some quick example text to build on the card title and make up the bulk of the card's content." 
          btn="Go somewhere">
        </CardBody>
      </Card>

      <Card>
        <CardBody 
          title="Special title treatment" 
          text="With supporting text below as a natural lead-in to additional content" 
          btn="Go somewhere">
        </CardBody>
      </Card>
    </div>
  )
}

export default App
