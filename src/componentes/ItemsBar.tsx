import React from 'react';
import './ItemsBar.css';

//react-icons
import { BsSearch } from 'react-icons/bs';

//shadcn
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../components/ui/menubar';
import { Input } from '../components/ui/input';

function ItemsBar() {

    const selects: SelectModel[] = [
        {
            trigger: 'Series',
            options: [
                {item: 'Top Series'}, 
                {item: 'Reviews'},
                {item: 'Recommendations'},
                {
                    subItems: [
                        {
                            trigger: 'Genres',
                            options: [
                                {item: 'Drama'},
                                {item: 'Adventure'},
                                {item: 'Romance'},
                                {item: 'Horror'}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            trigger: 'Movies',
            options: [
                {item: 'Top Movies'}, 
                {item: 'Reviews'},
                {item: 'Recommendations'},
                {
                    subItems: [
                        {
                            trigger: 'Genres',
                            options: [
                                {item: 'Drama'},
                                {item: 'Adventure'},
                                {item: 'Romance'},
                                {item: 'Horror'}
                            ]
                        }
                    ],
                }
            ]
        },
        {
            trigger: 'Help',
            options: [
                {item: 'About'}
            ]
        }

    ];

    function subItemFactory(subItem: SelectModel) {

        return(
            <MenubarSub>
                <MenubarSubTrigger>{subItem.trigger}</MenubarSubTrigger>
                    <MenubarSubContent className="custom-menubar-content">
                        {subItem.options.map((subItem) => (
                            <>
                                <MenubarItem className="custom-menubar-item">{subItem.item}</MenubarItem>
                                {subItem?.subItems?.length && subItem.subItems.map((subItem) => (
                                    subItemFactory(subItem)
                                ))}
                                <MenubarSeparator />
                            </>
                        ))}
                    </MenubarSubContent>
            </MenubarSub>
        )
    }

    return (
        <div className='container'>
            <div className="menubar-container">
                <Menubar className="custom-menubar">
                    {selects.map((select, index)=>( 
                        <MenubarMenu key={index}>
                            <MenubarTrigger className="custom-menubar-trigger">{select.trigger}</MenubarTrigger>
                            <MenubarContent className="custom-menubar-content">
                                {select.options && select.options.map((option, optIndex) => (
                                    <React.Fragment key={optIndex}>
                                        {option.item && <MenubarItem className="custom-menubar-item">{option.item}</MenubarItem>}
                                        {option?.subItems?.length && option.subItems.map((subItem) => (
                                            subItemFactory(subItem)
                                        ))}
                                        <MenubarSeparator />
                                    </React.Fragment>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    ))}
                </Menubar>
            </div>
            <div className='search'>
                <button><BsSearch /></button>
                <Input placeholder='pesquisar'/>
            </div>
        </div>
    );
}

export default ItemsBar;

type SelectModel = {
    trigger: string,
    options: {item?: string, subItems?: SelectModel[]}[]
}