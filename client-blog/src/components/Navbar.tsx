import { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ()=>{
  const [show , setShow] = useState(false);

  return (
    <div className="py-2 bg-gray-100 overflow-y-hidden">
      <nav className="w-full">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center" aria-label="Home" role="img">
            <Link to="/">
              <img className="cursor-pointer w-8 h-8 sm:w-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAnCAYAAACfdBHBAAAACXBIWXMAEgWuABIFrgFpirNTAAAHSGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDgtMjNUMDA6MDQ6NTYrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA0LTAyVDIxOjUzOjU0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA0LTAyVDIxOjUzOjU0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRhM2FkMTVmLTNjNjMtNDQ0ZS04OTk4LTNhYzdhNzc5NGEwZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg3NGRlYTIxLTliYTYtZDM0MC05NTc4LWZlNmYxNGYxODYxMCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjgwOTViMzRiLTY1OTItMWE0Ni1iNGM2LTM4ZGVjYTUyNzYwNSI+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iUk9OIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJST04iLz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJFV0EuIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJFV0EuIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+Q0QwNTI0NTI1ODQwMEMyNzVBOTQ4MkI3MDkxN0M5MEM8L3JkZjpsaT4gPHJkZjpsaT5DREJCNjVGMTFBRjRCNjdFQUU2QjQ5MTUzMEI0RTVGMDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MDk1YjM0Yi02NTkyLTFhNDYtYjRjNi0zOGRlY2E1Mjc2MDUiIHN0RXZ0OndoZW49IjIwMjItMDMtMDhUMTI6NTc6NDQrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGEzYWQxNWYtM2M2My00NDRlLTg5OTgtM2FjN2E3Nzk0YTBkIiBzdEV2dDp3aGVuPSIyMDIyLTA0LTAyVDIxOjUzOjU0KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YS6W/gAAAuBJREFUWIXtWNGRozAMfbq5BmiBFmiBKyEtpIVcCbslZEvYLYGUsJSQlJCUoPvAgmchkksCyWRm3wxjIxvr2ZYlGVFVvCp+PZvAPfgh/yy8NHmo6lUPgAbAEYDS8w3gDUAZqFildgWwB7AJ+mxorFUkD7ncQF7PPEcAlSMe9fMTYPLbR5Gv3coqgE9SvqdJbZDvGO8Skz8CKB5B3lA65QCwDlZ6E8i8XNO3F8nPdWAPgYzNp03ljmR18M0plaugbYS5yDMRI1gGspZkBcZo0U2gRnz4M9xLvka3xWznX9R2DtWEzCZ6efVn9DZHpzA6G1Nytnk7K98gb7WkzQOdGUSmcC1s5ypcMJ17yQuAP/S+xTCBdtw9w1T7CcBHqp81nTlWfkfKWCF7oMqVvj0a0/cfYQlXaVvNK1u7EsjdpscXzk+uw0xBqiZZk2QFhojqIyxHUSA/sIY31rVkhJ2Sr538f3IbA0ftxck3JOeDtsKQ4+wRH8KIPEA5U8RFEqGXxEtfRn7IPw0z5TXmPfiykanB2MtsSV6RDp/b11N85l55DkwWHTk/4SDVy1W1jeRunBF+X8uO8JfqLZVG0IIQkymCuo+0RvaU+kwmZzeTV9V3ABARFp+obrl55WS+7tMAk+/QxYRJ8kuajSfD77wDPXkRYbOysSYvNUuSL13Z0nt0vwXy3ejlIhLa/c3kRURFhH+BAJ3ZmOkYaW8e3gyi1LlFPKkMS/h5U1ogt1+TV0xGVUPyqhotRIa5vA0TMI/D1zhuZ3vvPY2IlEF/HmuEub0NkHscJsMH0PpMmcanG/fhZgMMZ8HbsK1+NNEIRdqZHLemByQbKcI4fTCyfJPKQj+G+8A+TbqG+3tMfdcAmpvNRkQ4T+Ebvx00I3xAbiY14j8MtksHVd0lHayyTLIS9id5psSsQQ6+VfHfNL6XHk0/Opvuk7cJnY3vu1RK3E7UvVcy8IHkc8DflECfxL0DOP0DQs15RNrp4EoAAAAASUVORK5CYII=" alt="logo" />
            </Link>
          </div>
          <div>
            <button onClick={() => setShow(!show)} className="sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
              <AiOutlineMenu size={'2em'}/>
            </button>
            <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
              <button onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white md:bg-transparent z-30 top-6">
                <AiOutlineClose size={'2em'}/>
              </button>
              <ul className="flex text-3xl md:text-base items-center py-2 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                <li className="text-indigo-800 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                  <Link to="#!">Gallery</Link>
                </li>
                <li className="text-indigo-800 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                  <Link to="#!">Blog</Link>
                </li>
                <li className="text-indigo-800 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                  <Link to="#!">Team</Link>
                </li>
                <li className="text-indigo-800 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0">
                  <Link to="#!">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
