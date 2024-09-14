import React from 'react'

const SearchBar = ({ handleSearch, searchedWord }) => {
    return (
        <div className="row">
            <div className="col-12">
                <input
                    type="text"
                    name="text"
                    id="text"
                    className='searchBar'
                    placeholder="Search todos here"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            {
                searchedWord.length !== 0 && < div className="col-12">
                    <p>
                        {`Word: ${searchedWord.text}, Date: ${searchedWord.date}`}
                    </p>
                </div>
            }
        </div >
    )
}

export default SearchBar