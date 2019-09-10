import React from 'react';
import './Login.css';

class Login extends React.Component{
    render(){
        return(
            <div className="logIn">
            <a className="user_name" href="https://passport.yandex.ru/"> 
            <span className="red">n</span>owa.mir </a>
            <a href="https://mail.yandex.ru/">
            Почта</a>
            <a href="https://mail.yandex.ru//compose">
            Написать письмо</a>
            <a href="https://money.yandex.ru/">
            Деньги</a>
            <a href="https://disk.yandex.ru/?source=domik-main">
            Диск</a>
            <a className="get_plus" href="https://plus.yandex.ru/?from=personal&utm_campaign=plus&utm_medium=personal&utm_source=yandex&source=personal">
            Получить Плюс</a>
            </div>
        )
    }
}

 export default Login;