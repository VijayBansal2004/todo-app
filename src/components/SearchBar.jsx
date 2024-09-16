import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
const SearchBar = ({ handleSearch, searchingTodoArray, handlecloseSearch, handleSearchedTodo }) => {
    return (
        <div className="row search-section">
            <div className="col-12 search-container">
                <input
                    type="text"
                    name="text"
                    id="text"
                    className='searchBar'
                    placeholder="Search todos here"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                {
                    searchingTodoArray.length === 0 ? <IoIosSearch className='searchIcon' /> : <RxCross2 className='crossIcon' onClick={handlecloseSearch} />
                }
            </div>

            <div className="col-12 search-results">
                {searchingTodoArray?.map((todo) => (
                    <div className='text-start d-flex justify-content-between searchedDataRow' onClick={() => handleSearchedTodo(todo.id)}>
                        <p className='searchedData'>{todo.text}</p>
                        <p className='searchedData'>{todo.date}</p>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default SearchBar