
const Header = () => {
  return (<>
    <header className="border-b">
      <ul className="flex justify-between text-xs text-gray-400">
        <li>
          <div>
            <ul className="flex divide-x divide-solid border-r">
              <li className="py-2 px-4">
                <select className="outline-none" name="language">
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                </select>
              </li>
              <li className="py-2 px-4">
                <select className="outline-none" name="money">
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
            <ul className="flex divide-x border-l">
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

export default Header;