import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoUrl } from "./Api";

function Search(props) {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${geoUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`
                        }
                    })
                }
            })

            .catch(err => console.error(err));
    }

    const handleChange = (e) => {
        setSearch(e);
        props.onSearch(e);

    }
    return (
        <div className="search"> 

        <AsyncPaginate 
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
        />
        </div>

    )
}

export default Search;