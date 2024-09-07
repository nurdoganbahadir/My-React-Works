import React from "react";

const AddBook = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">My Library</h1>
      <div className="row">
        <div className="col-sm-12">
          <form>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Book Name
              </label>
              <input
                type="text"
                placeholder="Book Name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Writer
              </label>
              <input
                type="text"
                placeholder="Writer"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                ISBN
              </label>
              <input type="text" placeholder="ISBN" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Kapak Resmi
              </label>
              <input
                type="text"
                placeholder="Kapak Resmi"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Tür
              </label>
              <input type="text" placeholder="Tür" className="form-control" />
              <p>Birden fazla seçenek varsa slash ile ayırabilirsiniz.</p>
            </div>
            <div className="mb-3">
              <label htmlFor="bookName" className="form-label">
                Yayınlanm Tarihi
              </label>
              <input
                type="text"
                placeholder="Yayınlanma Tarihi"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
