import 'rc-tree/assets/index.css';
import '../css/treecomponent.css';
import { useEffect, useState } from 'react';
import Tree, { TreeNode } from 'rc-tree';
import { TreeComponentState } from '../static/Constants';
import Trigger from 'rc-trigger';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const placements: any = {
    topLeft: {
        points: ['bl', 'tl'],
        overflow: {
            adjustX: 1,
            adjustY: 1,
        },
        offset: [0, -3],
        targetOffset: [0, 0],
    },
    bottomLeft: {
        points: ['tl', 'bl'],
        overflow: {
            adjustX: 1,
            adjustY: 1,
        },
        offset: [0, 3],
        targetOffset: [0, 0],
    },
};

function generateData(x: Number = 3, y: Number = 2, z: Number = 1, gData: Array<any> = []) {
    function _loop(_level: any, _preKey: any, _tns: any) {
        const preKey = _preKey || '0';
        const tns = _tns || gData;

        const children = [];
        for (let i = 0; i < x; i++) {
            const key = `${preKey}-${i}`;
            tns.push({ title: `${key}-label`, key: `${key}-key` });
            if (i < y) {
                children.push(key);
            }
        }
        if (_level < 0) {
            return tns;
        }
        const __level = _level - 1;
        children.forEach((key, index) => {
            tns[index].children = [];
            return _loop(__level, key, tns[index].children);
        });

        return null;
    }
    _loop(z, undefined, undefined);
    return gData;
}
function generateTreeNodes(treeNode: { key: string }, count?: number) {
    const arr = [];
    const key = treeNode.key;
    for (let i = 0; i < 3; i += 1) {
        // arr.push({ title: `${count}leaf ${key}-${i}`, key: `${key}-${i}` });
        arr.push({ title: `leaf ${key}-${i}`, key: `${key}-${i}` });
    }
    return arr;
}

function setLeaf(treeData: any, curKey: string, level: number) {
    const loopLeaf = (data: any[], lev: number) => {
        const l = lev - 1;
        data.forEach((item: { key: string; children: any; isLeaf: boolean; }) => {
            if (
                item.key.length > curKey.length
                    ? item.key.indexOf(curKey) !== 0
                    : curKey.indexOf(item.key) !== 0
            ) {
                return;
            }
            if (item.children) {
                loopLeaf(item.children, l);
            } else if (l < 1) {
                item.isLeaf = true;
            } else {
                item.isLeaf = false;
            }
        });
    };
    loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData: any[], curKey: string, child: { title: string; key: string; }[], level: number) {
    const loop = (data: any[]) => {
        if (level < 1 || curKey.length - 3 > level * 2) return;
        data.forEach((item: { key: any; children: any; }) => {
            if (curKey && curKey.indexOf(item.key) === 0) {
                if (item.children && item.children.length > 0) {
                    loop(item.children);
                } else {
                    item.children = child;
                }
            }
        });
    };
    loop(treeData);
    setLeaf(treeData, curKey, level);
}
function deleteChildren(treeData: any[], curKey: string) {
    const loop = (data: any[]) => {
        data.forEach((item: { key: any; children: any; isLeaf: boolean, loaded: boolean }) => {
            if (curKey === item.key) {
                if (item.children && item.children.length > 0) {
                    item.children = [];
                    item.isLeaf = false;
                }
            } else {
            }
        });
    };
    loop(treeData);
    // setLeaf(treeData, curKey, level);
}
const TreeDropdown = (props: any) => {
    const {
        children,
        trigger,
        treeData,
        onSelect,
        getNewTreeData,
    } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [expandedKeys, setExpandedKeys] = useState<Array<any>>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(false);
    const [filterKeys, setFilterKeys] = useState<Array<any> | undefined>([]);
    useEffect(() => {
        if (filterKeys && filterKeys.length) {
            setExpandedKeys(filterKeys);
            setAutoExpandParent(true);
        }
    }, [filterKeys]);
    const onExpand = (keysExpanded: Array<any>, e: { expanded: boolean, node: any }) => {
        const treeNode = e.node;
        setFilterKeys(undefined);
        getNewTreeData(treeData, treeNode.key, generateTreeNodes(treeNode), 2);
        setExpandedKeys(keysExpanded);
        setAutoExpandParent(false);
    };
    const filterFn = (key: any) => {
        if (inputValue && key.indexOf(inputValue) > -1) {
            return true;
        }
        return false;
    };
    const filterTreeNode = (treeNode: any) => {
        return filterFn(treeNode.props.title);
    };
    const onInputChange = (value: string) => {
        setFilterKeys([]);
        setInputValue(value)
    }
    const loop = (data: any) =>
        data.map((item: any) => {
            if (filterKeys && filterFn(item.title)) {
                filterKeys.push(item.key);
            }
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={item.title}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.title} />;
        });
    const overlay = (
        <div>
            <input placeholder="Search" value={inputValue} onChange={(e) => onInputChange(e.target.value)} style={{ width: 200 }} />
            <Tree
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                onSelect={onSelect}
                filterTreeNode={filterTreeNode}
            >
                {loop(generateData())}
            </Tree>
        </div >
    );

    return (
        <>
            <Trigger
                prefixCls='demo-dropdown-tree'
                builtinPlacements={placements}
                action={trigger}
                popupPlacement="bottomLeft"
                popupVisible={isVisible}
                popup={overlay}
                onPopupVisibleChange={setIsVisible}
            >
                {children}
            </Trigger>
        </>
    )

}
function TreeComponent() {
    const [treeComponentState, setTreeComponentState] = useState<TreeComponentState>({
        treeData: [],
        checkedKeys: [],
    });
    const [count, setCount] = useState(0);
    const [selectedTitle, setSelectedTitle] = useState<string>("");
    useEffect(() => {
        setTimeout(() => {
            setTreeComponentState({
                treeData: [
                    { title: 'pNode 01', key: '0-0', isLeaf: false },
                    { title: 'pNode 02', key: '0-1', isLeaf: false },
                    { title: 'pNode 03', key: '0-2', isLeaf: true },
                ],
                checkedKeys: ['0-0'],
            });
        }, 100);
    }, [])

    const onSelect = (selectedKeys: any, info: any) => {
        console.log('selected', info);
        if (selectedKeys.length)
            setSelectedTitle(info.node.props.title);
        else
            setSelectedTitle("");

    };

    const onCheck = (checkedKeys: any) => {
        console.log(checkedKeys);

        setTreeComponentState(values => ({ ...values, checkedKeys: checkedKeys }));
    };

    const onLoadData = (treeNode: any) => {
        console.log('load data...');
        return new Promise<void>(resolve => {
            setTimeout(() => {
                const treeData = [...treeComponentState.treeData];
                getNewTreeData(treeData, treeNode.key, generateTreeNodes(treeNode), 2);
                setTreeComponentState(values => ({ ...values, treeData: treeData }));
                resolve();
            }, 500);
        });
    };
    const onExpandData = (expandedKeys: any, e: { expanded: boolean, node: any }) => {
        console.log('expaND data...', e.node);
        const key = e.node.key;
        return new Promise<void>(resolve => {
            setTimeout(() => {
                if (!e.expanded) {
                    const treeData = [...treeComponentState.treeData];
                    deleteChildren(treeData, key);
                    setTreeComponentState(values => ({ ...values, treeData: treeData }));
                    resolve();
                } else {
                    setCount((count) => count + 1);
                    const treeData = [...treeComponentState.treeData];
                    getNewTreeData(treeData, key, generateTreeNodes({ key }, count), 2);
                    setTreeComponentState(values => ({ ...values, treeData: treeData }));
                    resolve();
                }

            }, 500);
        });

    };
    const Icon = () => (
        // <span className={classNames('customize-icon', selected && 'selected-icon')} />
        <i className='fa fa-certificate' style={{ "color": "green" }}></i>

    );
    const onClearItem = () => {
        setSelectedTitle("");
    }

    return (
        <>
            <div className="m-4">
                <h2 className="section-title p-2"> Tree Component with Dynamic Data Rendering </h2>
                <Tree
                    onSelect={onSelect}
                    checkable
                    onCheck={onCheck}
                    checkedKeys={treeComponentState.checkedKeys}
                    // loadData={onLoadData}
                    onExpand={onExpandData}
                    treeData={treeComponentState.treeData}
                />
            </div>
            <div className="m-4">
                <h2 className="section-title p-2"> Tree Component with Icon </h2>
                <Tree
                    icon={Icon}
                    onSelect={onSelect}
                    loadData={onLoadData}
                    treeData={treeComponentState.treeData}
                />
            </div>
            <div className="m-4">
                <h2 className="section-title p-2"> Tree Dropdown</h2>
                <TreeDropdown
                    onSelect={onSelect}
                    treeData={treeComponentState.treeData}
                    trigger={['click']}
                    getNewTreeData={getNewTreeData}
                >
                    <div className="demo-dropdown-trigger d-flex justify-content-between px-2 align-items-center menu-link-hoverable">
                        <div>
                            {selectedTitle ? selectedTitle : `Select`}
                        </div>
                        {selectedTitle ?
                            <div>
                                <FontAwesomeIcon className="menu-link-hoverable mt-1" icon={faTimes} onClick={onClearItem} />
                            </div>
                            :
                            <div>
                                <FontAwesomeIcon className="menu-link-hoverable mt-1" icon={faAngleDown} />
                            </div>
                        }
                    </div>
                </TreeDropdown>
            </div>
        </>
    );
}

export default TreeComponent;