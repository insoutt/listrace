
const HeaderTop = () => {
  return (<>
    <header className="border-b border-gray-100">
      <ul className="flex flex-wrap justify-between text-xs text-gray-400">
        <li>
          <div>
            <ul className="flex sm:divide-x sm:divide-solid sm:border-r">
              <li className="py-2 px-4">
                <select className="outline-none" name="language">
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                </select>
              </li>
              <li className="py-2 px-4">
                <select className="outline-none" name="currency">
                  <option value="usd">USD</option>
                  <option value="eur">Euro</option>
                  <option value="bdt">BDT</option>
                </select>
              </li>
              <li className="py-2 px-4">
                <span>(O)</span>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <ul className="flex sm:divide-x sm:border-l">
              <li className="py-2 px-4">
                <a href="tel:+12227776565">+1 222 777 6565</a>
              </li>
              <li className="py-2 px-4">
                <a href="#">Sign In</a>
              </li>
              <li className="py-2 px-4">
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </header>
  </>);
}

export default HeaderTop;