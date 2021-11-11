import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from './AccountActivity/SignIn/SignInForm';
import SignUpForm from './AccountActivity/SignUp/SignUpForm';
import {Route,Switch} from 'react-router-dom'
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import { Redirect } from 'react-router';
import ItemDetail from './Shop/ItemDetail/ItemDetail';
import style from'./App.module.css'
import Cart from './Cart/Cart';
import Notification from './Notification/Notification';
import { useNotification } from './Notification/NotificationContext';
import SearchBar from './Search Bar/SearchBar';
import { useAuth } from './Context/AuthContext';


function App() {
  const {currentUser} = useAuth()
  const {activeNotification} = useNotification()
  
  return (
      <div className={style.App}>
        <Header className ={style.header}></Header>
        {currentUser && <SearchBar></SearchBar>}
        <Switch>
            {!currentUser&&
            <Route path ='/sign-in' exact>
              <SignInForm></SignInForm>
            </Route>}
            {!currentUser &&
            <Route path ='/sign-up' exact>
            <SignUpForm></SignUpForm>
          </Route>  } 
            {!currentUser && 
            <Route path ='*' exact>
              <Redirect to = "/sign-in"> </Redirect>
            </Route>}   
            {currentUser && <Route path ='/dashboard' exact>
              <Dashboard></Dashboard>
            </Route>}
            {currentUser && <Route path = {'/item/:productId'} exact>
                <ItemDetail></ItemDetail>
            </Route>}
            {currentUser && <Route path = '/cart' exact>
                <Cart></Cart>
            </Route>}
            {currentUser && <Route path = '*'>
               <Redirect to = "/dashboard"> </Redirect>
            </Route>}
        </Switch>
        <Notification message = {activeNotification}></Notification>
      </div>
  );
}

export default App;
