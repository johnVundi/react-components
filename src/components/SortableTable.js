
import Table from './Table'
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import useSort from '../hooks/useSort';

function SortableTable(props) {
    const { config, data } = props;
    const {
        sortOrder,
        sortBy,
        sortedData,
        handleClick
    } = useSort(data,config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label)}>
                <div className='flex items-center'>
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        }
    })


    return (
        <Table {...props} config={updatedConfig} data={sortedData} />
    )
}

function getIcons(label, sortBy, sortOder) {
    if (label !== sortBy) {
        return <div>
            <GoChevronUp />
            <GoChevronDown />
        </div>
    }

    if (sortOder === null) {
        return <div>
            <GoChevronUp />
            <GoChevronDown />
        </div>
    } else if (sortOder === 'asc') {
        return <GoChevronUp />
    } else if (sortOder === 'desc') {
        return <GoChevronDown />
    }
}

export default SortableTable