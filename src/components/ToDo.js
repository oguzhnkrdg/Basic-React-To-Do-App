import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleCheck, faPen, faTrashCan
 } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({  toDo, tamamGorev, setGorevGuncelle, silGorev }) => {
    return(
        <>
        {toDo && toDo
            .sort((a, b) => a.id > b.id ? 1: -1)
            .map( (gorev, index) => {
              return(
                <React.Fragment key={gorev.id}>
                  <div className="col gorevBg">
                      <div className={gorev.durum ? 'yapildi' : ''}>
                        <span className="gorevSirasi">{index + 1}</span>
                        <span className="gorevText">{gorev.baslik}</span>
                      </div>
                      <div className="ikonlar">
                          <span title="Yapıldı / Yapılmadı" onClick={ (e) => tamamGorev(gorev.id)}> <FontAwesomeIcon icon={faCircleCheck} /> </span>
                          
                          {gorev.durum ? null :(
                            <span title="Düzenle" onClick={() => setGorevGuncelle({id: gorev.id, baslik: gorev.baslik, durum: gorev.durum ? true : false})}> <FontAwesomeIcon icon={faPen} /> </span>
                          )}
                          
                          <span title="Görevi Sil" onClick={() => silGorev(gorev.id)} > <FontAwesomeIcon icon={faTrashCan} /> </span>
                      </div>
                  </div>  
                </React.Fragment>
          )
        })
      }
      </>
    )
    
}

export default ToDo;