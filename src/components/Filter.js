import { Dropdown } from "flowbite-react";

const Filter = () => {

    return (
        <Dropdown label="Filter">
            <Dropdown.Item>
                Category
            </Dropdown.Item>
            <Dropdown.Item>
                Price
            </Dropdown.Item>
            <Dropdown.Item>
                OrderId
            </Dropdown.Item>
            <Dropdown.Item>
                Stock
            </Dropdown.Item>
        </Dropdown>
    )
}

export default Filter