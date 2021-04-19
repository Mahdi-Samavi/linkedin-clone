import { useState, useEffect } from 'react';
import firebase from '../firebase';
import CloseIcon from '@material-ui/icons/Close';
import '../css/Model.css';

export default function Model() {
    var [title, setTitle] = useState('');

    useEffect(() => {
        var model = document.getElementById('model');
        var obj = document.getElementsByClassName('model');
        Object.keys(obj).forEach(o => {
            obj[o].addEventListener('click', e => {
                setTitle(obj[o].getAttribute('data-model-title'));
                let model_content = document.getElementById(obj[o].getAttribute('data-model-id')).innerHTML;
                document.getElementById('model__content').innerHTML = model_content;
                model.classList.add('active');
            });
        });

        document.getElementById('model__close').addEventListener('click', e => {
            model.classList.remove('active');
        });

        let form = document.getElementById('post_form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            firebase.collection('posts').add({
                content: (new FormData(e.target)).get('content')
            })
        });
    });

    return (
        <div id="model">
            <div id="model__container">
                <div id="model__header">
                    <h2>{title}</h2>
                    <i id="model__close"><CloseIcon /></i>
                </div>
                <div id="model__content"></div>
            </div>
        </div>
    );
}