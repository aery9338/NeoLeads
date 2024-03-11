import React, { useState, type Dispatch, type SetStateAction, type FC } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { IoIosClose } from "react-icons/io";

interface FilterItemProps {
  filter: string;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  filterOptions: string[];
  data: [];
  onOptionChange: (value: any, selectedValue: any) => void;
  params: {
    id: string;
  };
}

const FilterItem: FC<FilterItemProps> = ({
  filter,
  isExpanded,
  setIsExpanded,
  filterOptions,
  data,
  onOptionChange,
  params,
}) => {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState<string[]>((params?.id !== null && params?.id !== undefined && params?.id !== "") ? data : []);
  const [filterData, setFilterData] = useState<string[]>(filterOptions);
  const [query, setQuery] = useState<string>("");

  const close = (): void => {
    setOpen(false);
    setIsExpanded(false);
  };

  const filteredSearch = filterData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleFilterValue = (option: string): void => {
    setFilterValue([...filterValue, option]);
    setFilterData(filterData.filter((a) => a !== option));
    if (params?.id !== null && params?.id !== undefined && params?.id !== "") {
      onOptionChange([...data, option], null);
    } else {
      onOptionChange([...filterValue, option], null);
    }
  };

  const deleteAllFilters = (): void => {
    setFilterValue([]);
    setFilterData(filterOptions);
    onOptionChange([], null);
  };

  const deleteFilter = (item: string): void => {
    setFilterValue(filterValue.filter((a) => a !== item));
    setFilterData([...filterData, item]);
    if (params?.id !== null && params?.id !== undefined && params?.id !== "") {
      onOptionChange(
        data.filter((a) => a !== item),
        null
      );
    } else {
      onOptionChange(
        filterValue.filter((a) => a !== item),
        null
      );
    }
  };

  return (
    <div
      className={`px-[6px] pt-4 pb-[2px] rounded-sm ${
        isExpanded ? "border border-[#146ef6]" : "hover:bg-userbg hover:cursor-pointer"
      }`}
    >
      <div
        role="button"
        tabIndex={0}
        className={`flex justify-between ${
          isExpanded ? "text-[#146ef6] hover:cursor-pointer" : null
        }`}
        onClick={close}
        onKeyDown={close}
      >
        <div className="flex">
          <div
            className={`${
              filterValue.length === 0 ? "hidden" : "flex"
            } rounded-full bg-[#1462f6] w-[6px] h-[6px] my-[2px] mr-1`}
          />
          <div className={`${filterValue.length === 0 ? "ml-3" : null} font-[450]`}>{filter}</div>
        </div>

        <div className="flex gap-1 mr-2">
          <div
            className={`${data?.length === 0 ? "hidden" : "flex"} text-xs border px-2 rounded-full`}
          >
            {data?.length}
            <IoIosClose className="mt-[1px]" onClick={deleteAllFilters} />
          </div>
          <button className="text-sm" type="button">
            {isExpanded ? <VscTriangleUp /> : <VscTriangleDown className="text-[#919191]" />}
          </button>
        </div>
      </div>

      <div
        className={`${
          data?.length === 0 ? "my-2" : "mt-3 mb-2"
        } mx-2 flex flex-wrap gap-1 text-sm rounded-sm`}
      >
        {data?.map((item) => (
          <div className="flex px-2 py-[1px] border bg-[#919191] text-white" key={item}>
            {item}
            <IoIosClose
              className="mt-[3px] hover:cursor-pointer"
              onClick={() => {
                deleteFilter(item);
              }}
            />
          </div>
        ))}
      </div>

      {isExpanded && (
        <div className="bg-gray-100 px-1 mx-2 text-base mb-4 border rounded-sm relative">
          <div
            role="button"
            tabIndex={0}
            className="flex justify-between text-[#919191] relative"
            onClick={() => {
              setOpen(!open);
            }}
            onKeyDown={() => {
              setOpen(!open);
            }}
          >
            <input
              className="font-[450] px-2 py-[2px] bg-gray-100 w-full focus:outline-none"
              id="search-filter"
              placeholder={`Search for ${filter}`}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="text-sm" type="button" aria-label="dropdown">
              <VscTriangleDown />
            </button>

            {isExpanded && open && (
              <div className="absolute top-8 left-0 bg-white rounded-md shadow-card w-full max-h-[112px] h-fit overflow-y-auto">
                {filteredSearch.map((option) => (
                  <button
                    className="filter-list-item"
                    type="button"
                    key={option}
                    onClick={() => {
                      handleFilterValue(option);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterItem;
