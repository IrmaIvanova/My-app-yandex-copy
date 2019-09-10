import React from 'react';
import './NewsBar.css';
import AdvBox from '../adv_box/AdvBox.js';



class NewsBar extends React.Component{
    render(){
        return(
            <div className="NewsBar">
                <div className="news_block">
                        <div className="news_title">
                            <h3> 
                                <a className="news_in_CMI"
                                href="https://news.yandex.ru/?msid=1567504427.10932.140305.309694&mlid=1567503741.glob_225">
                                Сейчас в СМИ</a> 
                                <a className="news_in_M" href="https://news.yandex.ru/Moscow?msid=1567504427.10932.140305.309694&mlid=1567503741.geo_213">
                                в Москве</a>
                                <a className="clock" href="https://yandex.ru/time">
                                3 сентября, вторник 16:01
                                </a>
                            </h3>
                        </div>
                    <a 
                        href="https://yandex.ru/news/story/Lukashenko_obyasnil_zakrytie_granicy_s_Ukrainoj--4507e5f0449c1d2aea1abb3ee6e7c7a7?lang=ru&from=main_portal&stid=vxnUjn1FphvBwhBVgf7Z&t=1567512137&lr=213&msid=1567512780.99511.176546.310417&mlid=1567512137.glob_225.4507e5f0">
                        Лукашенко объяснил закрытие границы с Украиной</a>
                    <a 
                        href="https://yandex.ru/news/story/Sberbank_restrukturiruet_kredity_postradavshim_ot_pavodka--954bdadb9f917aabce97a5d2bf2266f3?lang=ru&from=main_portal&stid=kLFmiVBcjHNVZ36b0qhw&t=1567512137&lr=213&msid=1567512780.99511.176546.310417&mlid=1567512137.glob_225.954bdadb">
                        Сбербанк реструктурирует кредиты пострадавшим от паводка</a>
                    <a 
                        href="https://yandex.ru/news/story/Sud_vynes_pervyj_prigovor_po_delu_o_besporyadkakh_27_iyulya_v_Moskve--5dd4bc89372772d409ab024fc3e997fe?lang=ru&from=main_portal&stid=Gbarr9P5FShxCooKHmts&t=1567512137&lr=213&msid=1567512780.99511.176546.310417&mlid=1567512137.glob_225.5dd4bc89">
                        Суд вынес первый приговор по делу о беспорядках 27 июля в Москве</a>
                    <a 
                        href="https://yandex.ru/news/story/Verkhovnaya_rada_lishila_deputatov_neprikosnovennosti--995c5ed8638727c524e950494ad07e9a?lang=ru&from=main_portal&stid=oEZ0V8-2s7y1g_1lWjBH&t=1567512137&lr=213&msid=1567512780.99511.176546.310417&mlid=1567512137.glob_225.995c5ed8">
                        Верховная рада лишила депутатов неприкосновенности</a>
                    <a 
                        href="https://yandex.ru/news/story/Vpavshaya_v_komu_v_Turcii_rossijskaya_studentka_umerla--37ec5bae37767c3e689f0ef23947f55f?lang=ru&from=main_portal&stid=ZOi-2TS6VgXFXgIeVIwi&t=1567512137&lr=213&msid=1567512780.99511.176546.310417&mlid=1567512137.glob_225.37ec5bae">
                        Штурмовик Су-25 разбился на Кавказе</a>

                    <AdvBox/>
                </div>
            </div>

        )
    }
}

 export default NewsBar;

//Рестайлинговый Lada 4x4: опубликованы фото салонаКубышка России начала расти в десять раз быстрееБывший министр экономики Украины озвучил потери от блокады КрымаВпавшая в кому в Турции российская студентка умерлаДмитрий Тарасов сообщил о беременности жены