import React from 'react';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '../components/ui/menubar';
import './ItemsBar.css';

function ItemsBar() {

    const selects: SelectModel[] = [
        {
            trigger: 'Series',
            options: [
                {
                    item: 'Top Series'
                }, 
                {
                    item: 'Reviews'
                },
                {
                    item: 'Recommendations'
                },
                {
                    subItems: [
                        {
                            trigger: 'Genres',
                            options: [
                                {
                                    item: 'Drama',
                                },
                                {
                                    item: 'Adventure',
                                },
                                {
                                    item: 'Romance',
                                },
                                {
                                    item: 'Horror'
                                }
                            ]
                        }
                    ],
                    item: ''
                }
            ]
        },
        {
            trigger: 'Movies',
            options: [
                {
                    item: 'Top Movies',
                }, 
                {
                    item: 'Reviews',
                },
                {
                    item: 'Recommendations',
                },
                {
                    subItems: [
                        {
                            trigger: 'Genres',
                            options: [
                                {
                                    item: 'Drama',
                                },
                                {
                                    item: 'Adventure',
                                },
                                {
                                    item: 'Romance',
                                },
                                {
                                    item: 'Horror'
                                }
                            ]
                        }
                    ],
                }
            ]
        }

    ];

    function subItemFactory(subItem: SelectModel) {

        return(
            <MenubarSub>
                <MenubarSubTrigger>{subItem.trigger}</MenubarSubTrigger>
                    <MenubarSubContent>
                        {subItem.options.map((subItem) => (
                            <>
                                <MenubarItem>{subItem.item}</MenubarItem>
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
        <div className="menubar-container" >
            <Menubar>
                {selects.map((select, index)=>(
                    // <div 
                    //         key={`select-${index}`}
                    //         className={
                    //         index === 0 ? 'retirar-borda-direita' :
                    //         index === selects.length - 1 ? 'retirar-borda-esquerda' :
                    //         'retirar-todas-as-bordas'
                    //     }>
                            <MenubarMenu>
                                <MenubarTrigger>{select.trigger}</MenubarTrigger>
                                    <MenubarContent>
                                        {select.options.map((option,optIndex)=>(
                                            <React.Fragment key={`option-${optIndex}`}>
                                                {option.item && <MenubarItem>{option.item}</MenubarItem>}
                                                {option?.subItems?.length && option.subItems.map((subItem) => (
                                                    subItemFactory(subItem)
                                                ))}
                                                <MenubarSeparator />
                                            </React.Fragment>
                                        ))}
                                </MenubarContent>
                            </MenubarMenu>
                    //</div>
                ))}
            </Menubar>
        </div>
    );
}

export default ItemsBar;

type SelectModel = {
    trigger: string,
    options: {item?: string, subItems?: SelectModel[]}[]
}