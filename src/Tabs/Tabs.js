import React from 'react';
import './Tabs.css';


class Tabs extends React.Component{
    render(){
        return(
            <div class="tabs">
                <ul class="tabs">
                    <li><a href="https://yandex.ru/portal/video?stream_active=category&stream_channel=default&stream_category=film&from_block=video-tabs&from=morda">
                        Видео</a>
                    </li>
                    <li><a href="https://yandex.ru/images/">
                        Картинки</a>
                    </li>
                    <li><a href="https://news.yandex.ru/">
                        Новости</a>
                    </li>
                    <li><a href="https://yandex.ru/maps">
                        Карты</a></li>
                    <li><a href="https://market.yandex.ru/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch">
                        Маркет</a>
                    </li>
                    <li><a href="https://translate.yandex.ru/">
                        Переводчик</a>
                    </li>
                    <li><a href="https://music.yandex.ru/">
                        Музыка</a>
                    </li>
                    <li><a href="https://yandex.ru/efir?stream_active=storefront&stream_channel=default&from_block=tabs&from=morda">
                        Эфир</a>
                    </li>
                    <li><a href="https://yandex.ru/all">
                        ещё</a>
                    </li>

                </ul>
            </div>
        )
    }
}

export default Tabs;

