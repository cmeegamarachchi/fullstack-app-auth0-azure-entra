import { useConfiguration } from '@/providers/ConfigurationProvider'
import Layout from './Layout'
import { Link } from 'react-router-dom'

const GoToSetup = () => {
  return <div>
    <h1>You have to update configuration before being able to use rest of the features. Please visit Settings page and complete configuration</h1>
    <Link to="/settings">Go to settings</Link>
  </div>
}

const ListOfTodos = () => {
  return <div>To do list</div>
}

const HomePage = () => {
  const {apiBaeUrl} = useConfiguration()
  
  return <Layout>
    {apiBaeUrl ? <ListOfTodos /> : <GoToSetup />}
  </Layout>
}

export default HomePage