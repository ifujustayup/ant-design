"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8928],{10664:function(u,l,t){t.r(l);var c=t(2143),p=t(50250),m=t(59378),v=t(5648),b=t(74775),o=t(5937),_=t(2068),Z=t(74399),f=t(63942),h=t(16073),y=t(24628),g=t(19260),T=t(56140),i=t(5388),P=t(49545),x=t(6965),A=t(49706),C=t(95127),k=t(74418),B=t(73024),a=t(28257),d=t(67294),n=t(96923);function s(){var r=(0,a.eL)(),e=r.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("p",null,e[2].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[3].value),(0,n.tZ)("li",null,e[4].value),(0,n.tZ)("li",null,(0,n.tZ)(a.rU,{to:"/components/radio-cn/#components-radio-demo-radiobutton"},e[5].value),e[6].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-tabs-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/tabs/demo/basic.tsx",jsx:`import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const App = () => (
  <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: \`Tab 1\`,
        key: '1',
        children: \`Content of Tab Pane 1\`,
      },
      {
        label: \`Tab 2\`,
        key: '2',
        children: \`Content of Tab Pane 2\`,
      },
      {
        label: \`Tab 3\`,
        key: '3',
        children: \`Content of Tab Pane 3\`,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\u3002</p>"}},{demo:{id:"components-tabs-demo-disabled"},previewerProps:{title:"\u7981\u7528",filename:"components/tabs/demo/disabled.tsx",jsx:`import React from 'react';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Tab 1',
        key: '1',
        children: 'Tab 1',
      },
      {
        label: 'Tab 2',
        key: '2',
        children: 'Tab 2',
        disabled: true,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3',
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7981\u7528\u67D0\u4E00\u9879\u3002</p>"}},{demo:{id:"components-tabs-demo-centered"},previewerProps:{title:"\u5C45\u4E2D",filename:"components/tabs/demo/centered.tsx",jsx:`import React from 'react';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>\u6807\u7B7E\u5C45\u4E2D\u5C55\u793A\u3002</p>"}},{demo:{id:"components-tabs-demo-icon"},previewerProps:{title:"\u56FE\u6807",filename:"components/tabs/demo/icon.tsx",jsx:`import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        label: (
          <span>
            <Icon />
            Tab {id}
          </span>
        ),
        key: id,
        children: \`Tab \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>\u6709\u56FE\u6807\u7684\u6807\u7B7E\u3002</p>"}},{demo:{id:"components-tabs-demo-slide"},previewerProps:{title:"\u6ED1\u52A8",filename:"components/tabs/demo/slide.tsx",jsx:`import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
const App = () => {
  const [mode, setMode] = useState('top');
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
          height: 220,
        }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: \`Tab-\${id}\`,
            key: id,
            disabled: i === 28,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u5DE6\u53F3\u3001\u4E0A\u4E0B\u6ED1\u52A8\uFF0C\u5BB9\u7EB3\u66F4\u591A\u6807\u7B7E\u3002</p>"}},{demo:{id:"components-tabs-demo-extra"},previewerProps:{title:"\u9644\u52A0\u5185\u5BB9",filename:"components/tabs/demo/extra.tsx",jsx:`import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Divider, Tabs } from 'antd';
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};
const options = ['left', 'right'];
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of tab \${id}\`,
  };
});
const App = () => {
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);
  return (
    <>
      <Tabs tabBarExtraContent={operations} items={items} />
      <br />
      <br />
      <br />
      <div>You can also specify its direction or both side</div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value);
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot} items={items} />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u5728\u9875\u7B7E\u4E24\u8FB9\u6DFB\u52A0\u9644\u52A0\u64CD\u4F5C\u3002</p>",style:`.tabs-extra-demo-button {
  margin-right: 16px;
}

.ant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}`}},{demo:{id:"components-tabs-demo-size"},previewerProps:{title:"\u5927\u5C0F",filename:"components/tabs/demo/size.tsx",jsx:`import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
const App = () => {
  const [size, setSize] = useState('small');
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Card Tab \${id}\`,
            key: id,
            children: \`Content of card tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u5927\u53F7\u9875\u7B7E\u7528\u5728\u9875\u5934\u533A\u57DF\uFF0C\u5C0F\u53F7\u7528\u5728\u5F39\u51FA\u6846\u7B49\u8F83\u72ED\u7A84\u7684\u5BB9\u5668\u5185\u3002</p>"}},{demo:{id:"components-tabs-demo-position"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/tabs/demo/position.tsx",jsx:`import React, { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
const App = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab \${id}\`,
          };
        })}
      />
    </>
  );
};
export default App;
`,description:'<p>\u6709\u56DB\u4E2A\u4F4D\u7F6E\uFF0C<code>tabPosition="left|right|top|bottom"</code>\u3002\u5728\u79FB\u52A8\u7AEF\u4E0B\uFF0C<code>left|right</code> \u4F1A\u81EA\u52A8\u5207\u6362\u6210 <code>top</code>\u3002</p>'}},{demo:{id:"components-tabs-demo-card"},previewerProps:{title:"\u5361\u7247\u5F0F\u9875\u7B7E",filename:"components/tabs/demo/card.tsx",jsx:`import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const App = () => (
  <Tabs
    onChange={onChange}
    type="card"
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>\u53E6\u4E00\u79CD\u6837\u5F0F\u7684\u9875\u7B7E\uFF0C\u4E0D\u63D0\u4F9B\u5BF9\u5E94\u7684\u5782\u76F4\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-tabs-demo-editable-card"},previewerProps:{title:"\u65B0\u589E\u548C\u5173\u95ED\u9875\u7B7E",filename:"components/tabs/demo/editable-card.tsx",jsx:`import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
const initialItems = [
  {
    label: 'Tab 1',
    children: 'Content of Tab 1',
    key: '1',
  },
  {
    label: 'Tab 2',
    children: 'Content of Tab 2',
    key: '2',
  },
  {
    label: 'Tab 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];
const App = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};
export default App;
`,description:"<p>\u53EA\u6709\u5361\u7247\u6837\u5F0F\u7684\u9875\u7B7E\u652F\u6301\u65B0\u589E\u548C\u5173\u95ED\u9009\u9879\u3002\u4F7F\u7528 <code>closable={false}</code> \u7981\u6B62\u5173\u95ED\u3002</p>"}},{demo:{id:"components-tabs-demo-card-top"},previewerProps:{compact:!0,debug:!0,title:"\u5361\u7247\u5F0F\u9875\u7B7E\u5BB9\u5668",filename:"components/tabs/demo/card-top.tsx",jsx:`import React from 'react';
import { Tabs, theme } from 'antd';
import { css } from '@emotion/css';
const useStyle = () => {
  const { token } = theme.useToken();
  const antdTabsCls = '.ant-tabs';
  return css\`
    background: \${token.colorBgLayout};
    padding: \${token.paddingLG}px;

    \${antdTabsCls}\${antdTabsCls}-card {
      \${antdTabsCls}-content {
        padding: \${token.padding}px;
        background: \${token.colorBgContainer};
      }

      \${antdTabsCls}-nav {
        margin: 0;

        \${antdTabsCls}-nav-wrap > \${antdTabsCls}-nav-list > \${antdTabsCls}-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            background: \${token.colorBgContainer};
            border-color: \${token.colorBorderBg};
          }
        }

        &::before {
          display: none;
        }
      }
    }
  \`;
};
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab Title \${id}\`,
    key: id,
    children: (
      <>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
      </>
    ),
  };
});
const App = () => {
  const style = useStyle();
  return (
    <div className={style}>
      <Tabs type="card" items={items} />
    </div>
  );
};
export default App;
`,description:"<p>\u7528\u4E8E\u5BB9\u5668\u9876\u90E8\uFF0C\u9700\u8981\u4E00\u70B9\u989D\u5916\u7684\u6837\u5F0F\u8986\u76D6\u3002</p>"}},{demo:{id:"components-tabs-demo-custom-add-trigger"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u65B0\u589E\u9875\u7B7E\u89E6\u53D1\u5668",filename:"components/tabs/demo/custom-add-trigger.tsx",jsx:`import React, { useRef, useState } from 'react';
import { Button, Tabs } from 'antd';
const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return {
    label: \`Tab \${id}\`,
    children: \`Content of Tab Pane \${index + 1}\`,
    key: id,
  };
});
const App = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  const onChange = (key) => {
    setActiveKey(key);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    setItems([
      ...items,
      {
        label: 'New Tab',
        children: 'New Tab Pane',
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u9690\u85CF\u9ED8\u8BA4\u7684\u9875\u7B7E\u589E\u52A0\u56FE\u6807\uFF0C\u7ED9\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668\u7ED1\u5B9A\u4E8B\u4EF6\u3002</p>"}},{demo:{id:"components-tabs-demo-custom-tab-bar"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u9875\u7B7E\u5934",filename:"components/tabs/demo/custom-tab-bar.tsx",jsx:`import React from 'react';
import { Tabs } from 'antd';
import { Sticky, StickyContainer } from 'react-sticky';
const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        style={{
          zIndex: 1,
          ...style,
        }}
      />
    )}
  </Sticky>
);
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of Tab Pane \${id}\`,
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  };
});
const App = () => (
  <StickyContainer>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
  </StickyContainer>
);
export default App;
`,description:"<p>\u4F7F\u7528 react-sticky \u7EC4\u4EF6\u5B9E\u73B0\u5438\u9876\u6548\u679C\u3002</p>"}},{demo:{id:"components-tabs-demo-custom-tab-bar-node"},previewerProps:{title:"\u53EF\u62D6\u62FD\u6807\u7B7E",filename:"components/tabs/demo/custom-tab-bar-node.tsx",jsx:`import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const type = 'DraggableTabNode';
const DraggableTabNode = ({ index, children, moveNode }) => {
  const ref = useRef(null);
  const [{ isOver }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
      };
    },
    drop: (item) => {
      moveNode(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: {
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));

  // Style
  const style = {
    marginRight: 24,
  };
  if (isOver) {
    style.transition = 'all 0.3s';
  }
  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};
const DraggableTabs = (props) => {
  const { items = [] } = props;
  const [order, setOrder] = useState([]);
  const moveTabNode = (dragKey, hoverKey) => {
    const newOrder = order.slice();
    items.forEach((item) => {
      if (item.key && newOrder.indexOf(item.key) === -1) {
        newOrder.push(item.key);
      }
    });
    const dragIndex = newOrder.indexOf(dragKey);
    const hoverIndex = newOrder.indexOf(hoverKey);
    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragKey);
    setOrder(newOrder);
  };
  const renderTabBar = (tabBarProps, DefaultTabBar) => (
    <DefaultTabBar {...tabBarProps}>
      {(node) => (
        <DraggableTabNode key={node.key} index={node.key} moveNode={moveTabNode}>
          {node}
        </DraggableTabNode>
      )}
    </DefaultTabBar>
  );
  const orderItems = [...items].sort((a, b) => {
    const orderA = order.indexOf(a.key);
    const orderB = order.indexOf(b.key);
    if (orderA !== -1 && orderB !== -1) {
      return orderA - orderB;
    }
    if (orderA !== -1) {
      return -1;
    }
    if (orderB !== -1) {
      return 1;
    }
    const ia = items.indexOf(a);
    const ib = items.indexOf(b);
    return ia - ib;
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <Tabs renderTabBar={renderTabBar} {...props} items={orderItems} />
    </DndProvider>
  );
};
const App = () => (
  <DraggableTabs
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>react-dnd@15+</code> \u5B9E\u73B0\u6807\u7B7E\u53EF\u62D6\u62FD\u3002</p>",style:`.dropping {
  transition: all 0.3s;
}`}},{demo:{id:"components-tabs-demo-animated"},previewerProps:{debug:!0,title:"\u52A8\u753B",filename:"components/tabs/demo/animated.tsx",jsx:`import React from 'react';
import { Tabs, Switch, Space } from 'antd';
const App = () => {
  const [inkBar, setInkBar] = React.useState(true);
  const [tabPane, setTabPane] = React.useState(true);
  return (
    <>
      <Space>
        <Switch
          checkedChildren="inkBar"
          unCheckedChildren="inkBar"
          checked={inkBar}
          onChange={() => setInkBar(!inkBar)}
        />
        <Switch
          checkedChildren="tabPane"
          unCheckedChildren="tabPane"
          checked={tabPane}
          onChange={() => setTabPane(!tabPane)}
        />
      </Space>

      <Tabs
        animated={{
          inkBar,
          tabPane,
        }}
        items={[
          {
            label: \`Bamboo\`,
            key: '1',
            children: \`Hello Bamboo!\`,
            style: {
              height: 200,
              boxShadow: '0 0 3px rgba(255, 0, 0, 0.5)',
            },
          },
          {
            label: \`Little\`,
            key: '2',
            children: \`Hi Little!\`,
            style: {
              height: 300,
              boxShadow: '0 0 3px rgba(0, 255, 0, 0.5)',
            },
          },
          {
            label: \`Light\`,
            key: '3',
            children: \`Welcome Light!\`,
            style: {
              height: 100,
              boxShadow: '0 0 3px rgba(0, 0, 255, 0.5)',
            },
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u52A8\u753B\u5207\u6362\u3002</p>"}},{demo:{id:"components-tabs-demo-nest"},previewerProps:{debug:!0,title:"\u5D4C\u5957",filename:"components/tabs/demo/nest.tsx",jsx:`import React, { useState } from 'react';
import { Select, Tabs } from 'antd';
const { Option } = Select;
const positionList = ['left', 'right', 'top', 'bottom'];
const App = () => {
  const [parentPos, setParentPos] = useState(undefined);
  const [childPos, setChildPos] = useState(undefined);
  const [parentType, setParentType] = useState(undefined);
  const [childType, setChildType] = useState(undefined);
  return (
    <div>
      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Parent - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Child - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentType(val);
        }}
      >
        <Option value="line">Parent - line</Option>
        <Option value="card">Parent - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildType(val);
        }}
      >
        <Option value="line">Child - line</Option>
        <Option value="card">Child - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Tabs
        defaultActiveKey="1"
        tabPosition={parentPos}
        type={parentType}
        items={[
          {
            label: 'Tab 1',
            key: '1',
            children: (
              <Tabs
                defaultActiveKey="1"
                tabPosition={childPos}
                type={childType}
                style={{
                  height: 300,
                }}
                items={new Array(20).fill(null).map((_, index) => {
                  const key = String(index);
                  return {
                    label: \`Tab \${key}\`,
                    key,
                    children: \`TTTT \${key}\`,
                  };
                })}
              />
            ),
          },
          {
            label: 'Tab 2',
            key: '2',
            children: 'Content of Tab Pane 2',
          },
        ]}
      />
    </div>
  );
};
export default App;
`,description:"<p>\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"tabs"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tabs"},(0,n.tZ)("span",{className:"icon icon-link"})),"Tabs"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value),(0,n.tZ)("th",null,e[9].value),(0,n.tZ)("th",null,e[10].value),(0,n.tZ)("th",null,e[11].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value,(0,n.tZ)("code",null,e[23].value)),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[34].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value,(0,n.tZ)("code",null,e[37].value),e[38].value),(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,(0,n.tZ)(a.rU,{to:"#tabitemtype"},e[43].value)),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,e[45].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value,(0,n.tZ)("code",null,e[53].value)),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value,(0,n.tZ)("code",null,e[63].value),e[64].value,(0,n.tZ)("code",null,e[65].value),e[66].value,(0,n.tZ)("code",null,e[67].value),e[68].value),(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[70].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null,e[73].value),(0,n.tZ)("td",null,e[74].value),(0,n.tZ)("td",null,e[75].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[76].value),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,e[85].value,(0,n.tZ)("code",null,e[86].value),e[87].value,(0,n.tZ)("code",null,e[88].value),e[89].value,(0,n.tZ)("code",null,e[90].value),e[91].value,(0,n.tZ)("code",null,e[92].value)),(0,n.tZ)("td",null,e[93].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[94].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[95].value),(0,n.tZ)("td",null,e[96].value),(0,n.tZ)("td",null,e[97].value),(0,n.tZ)("td",null,e[98].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[99].value),(0,n.tZ)("td",null,e[100].value,(0,n.tZ)("code",null,e[101].value),e[102].value,(0,n.tZ)("code",null,e[103].value),e[104].value,(0,n.tZ)("code",null,e[105].value),e[106].value),(0,n.tZ)("td",null,e[107].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[108].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[109].value),(0,n.tZ)("td",null,e[110].value),(0,n.tZ)("td",null,e[111].value),(0,n.tZ)("td",null,e[112].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[113].value),(0,n.tZ)("td",null,e[114].value,(0,n.tZ)("code",null,e[115].value),e[116].value),(0,n.tZ)("td",null,e[117].value),(0,n.tZ)("td",null,e[118].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[119].value),(0,n.tZ)("td",null,e[120].value),(0,n.tZ)("td",null,e[121].value),(0,n.tZ)("td",null,e[122].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[123].value),(0,n.tZ)("td",null,e[124].value),(0,n.tZ)("td",null,e[125].value,(0,n.tZ)("code",null,e[126].value),e[127].value,(0,n.tZ)("code",null,e[128].value),e[129].value,(0,n.tZ)("code",null,e[130].value),e[131].value,(0,n.tZ)("code",null,e[132].value),e[133].value),(0,n.tZ)("td",null,e[134].value),(0,n.tZ)("td",null,e[135].value)))),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,e[136].value,(0,n.tZ)("a",{href:"https://github.com/react-component/tabs#tabs"},e[137].value))),(0,n.tZ)("h3",{id:"tabitemtype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tabitemtype"},(0,n.tZ)("span",{className:"icon icon-link"})),"TabItemType"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[138].value),(0,n.tZ)("th",null,e[139].value),(0,n.tZ)("th",null,e[140].value),(0,n.tZ)("th",null,e[141].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[142].value),(0,n.tZ)("td",null,e[143].value,(0,n.tZ)("code",null,e[144].value),e[145].value),(0,n.tZ)("td",null,e[146].value),(0,n.tZ)("td",null,e[147].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[148].value),(0,n.tZ)("td",null,e[149].value),(0,n.tZ)("td",null,e[150].value),(0,n.tZ)("td",null,e[151].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[152].value),(0,n.tZ)("td",null,e[153].value),(0,n.tZ)("td",null,e[154].value),(0,n.tZ)("td",null,e[155].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[156].value),(0,n.tZ)("td",null,e[157].value),(0,n.tZ)("td",null,e[158].value),(0,n.tZ)("td",null,e[159].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[160].value),(0,n.tZ)("td",null,e[161].value),(0,n.tZ)("td",null,e[162].value),(0,n.tZ)("td",null,e[163].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[164].value),(0,n.tZ)("td",null,e[165].value),(0,n.tZ)("td",null,e[166].value),(0,n.tZ)("td",null,e[167].value)))))))}l.default=s}}]);
