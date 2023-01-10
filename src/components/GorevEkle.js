const GorevEkle = ({  yeniGorev, setYeniGorev, ekleGorev  }) => {
    return(
        <>
                <div className="row mb-3">
                  <div className="col">
                    <input value={yeniGorev} onChange={ (e) => setYeniGorev(e.target.value)} className="form-control form-control-lg" />
                  </div>
                  <div className="col-auto">
                    <button onClick={ekleGorev} className="btn btn-lg btn-info">Görev Ekle</button>
                  </div>
                </div>
            </>
    )
}

export default GorevEkle;