const GuncelleForm= ({  gorevGuncelle, duzenleGorev, iptalGuncel, guncelGorev }) => {
    return(
        <>
             <div className="row mb-3">
                <div className="col">
                  <input value={ gorevGuncelle && gorevGuncelle.baslik} onChange={(e) => duzenleGorev(e)} className="form-control form-control-lg" />
                </div>
                <div className="col-auto">
                  <button className="btn btn-lg btn-info mr-20" onClick={guncelGorev}>Güncelle</button>
                  <button onClick={iptalGuncel} className="btn btn-lg btn-danger">Vazgeç</button>
                </div>
              </div>
          </>
    )
}

export default GuncelleForm;