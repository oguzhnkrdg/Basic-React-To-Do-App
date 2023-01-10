import {useState} from 'react';

import GorevEkle from './components/GorevEkle.js';
import GuncelleForm from './components/GuncelleFormu.js';
import ToDo from './components/ToDo.js';

import 'bootstrap/dist/css/bootstrap.min.css';

 import './App.css';

function App() {
  
  const [toDo, setToDo] = useState([ ]);

  const [yeniGorev, setYeniGorev] = useState('');
  const [gorevGuncelle, setGorevGuncelle] = useState('');
  
  const ekleGorev = () => {
      if (yeniGorev) {
        let number = toDo.length + 1;
        let yeniGiris = { id: number, baslik: yeniGorev, durum: false }
        setToDo([...toDo, yeniGiris])
        setYeniGorev('');
      }
  };

  
  const silGorev = (id) => {
      let yeniGorevler = toDo.filter(gorev => gorev.id !== id)
      setToDo(yeniGorevler);
  };

  const tamamGorev = (id) => {
      let yeniGorev = toDo.map( gorev =>{
        if (gorev.id == id) {
          return ({...gorev, durum: !gorev.durum})
        }
        return gorev;
      })
      setToDo(yeniGorev);
  };

  const iptalGuncel = () => {
      setGorevGuncelle('');
  };

  const duzenleGorev = (e) => {
      let yeniGiris = {
        id: gorevGuncelle.id,
        baslik: e.target.value,
        durum: gorevGuncelle.durum ? true : false
      }
      setGorevGuncelle(yeniGiris);
  };

  const guncelGorev = () => {
    let kayitFiltresi = [...toDo].filter( gorev => gorev.id !== gorevGuncelle.id );
    let guncellenenGorev = [...kayitFiltresi, gorevGuncelle]
    setToDo(guncellenenGorev);
    setGorevGuncelle('');
  };

  return (
    <div className="container App">
      <h1 className='m-5 fw-bold'>Yapılacaklar Listesi</h1>
        {gorevGuncelle && gorevGuncelle ? (
          <GuncelleForm 
            gorevGuncelle = {gorevGuncelle}
            duzenleGorev = {duzenleGorev}
            iptalGuncel = {iptalGuncel}
            guncelGorev = {guncelGorev}
          />
        ) : (
            <GorevEkle
              yeniGorev={yeniGorev}
              setYeniGorev={setYeniGorev}
              ekleGorev ={ekleGorev}
            />
        ) }
       

          {toDo && toDo.length ? '' : 'Aktif Görev Yok.'}

        <ToDo 
            toDo ={toDo}
            tamamGorev ={tamamGorev}
            setGorevGuncelle ={setGorevGuncelle}
            silGorev ={silGorev}
        />
      
    </div>
  );
}

export default App;
