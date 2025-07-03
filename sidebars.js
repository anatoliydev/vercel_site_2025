const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Eating – Anatolii 🍽️',
      link: { type: 'doc', id: 'eating/index' },
      items: [
        'eating/buy',
        'eating/receipts',
        'eating/supplements',
      ],
    },
  ],
  servicesSidebar: [
    {
      type: 'category',
      label: 'Мої сервіси',
      link: { type: 'doc', id: 'services/index' },
      items: [
        'services/lviv',
        'services/chernihiv',
        'services/favorites',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Харчування',
      link: { type: 'doc', id: 'nutrition/index' },
      items: [
        'nutrition/bju-calculator',
        'nutrition/buy-products',
        {
          type: 'category',
          label: 'Мої рецепти',
          link: { type: 'doc', id: 'nutrition/recipes' },
          items: [
            'nutrition/recipes/meat',
            'nutrition/recipes/cottage-cheese',
          ],
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Інше',
      items: [
        'other/day-routine',
      ],
    },
  ],
};

export default sidebars;
