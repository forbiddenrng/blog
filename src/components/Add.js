import React from 'react';
import "./Add.css"
const Add = () => {
  return (
    <section>
      <h2>Podziej się z nami swoimi doświadczeniami</h2>
      <form>
        <input type="text" placeholder="imię i nazwisko" /> <br />
        <input type="text" placeholder="kraj" /> <br />
        <input type="text" placeholder="miasto" /> <br />
        <textarea name="polish" id="polish" cols="20" rows="10" placeholder="napisz polską wersję"></textarea> <br />
        <textarea name="english" id="english" cols="20" rows="10" placeholder="napisz angielską wersję"></textarea> <br />
        <input type="file" name="photo" id="photo" accept="image/png, image/jpeg" /> Dodaj zdjęcia
      </form>
    </section>
  );
}

export default Add;