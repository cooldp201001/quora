const notificationsData = [
    {
      id: 1,
      type: 'message',
      message: 'You have a new message from Sofia Ramirez.',
      profileName:"Sofia Ramirez",
      profileImage:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      time: '1d',
      isRead: false,
    },
    {
      id: 2,
      type: 'upvote',
      message: 'Your answer on "How to learn JavaScript" received an upvote.',
      profileName:"Priya Patel",
      profileImage:"https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
      time: '20min',
      isRead: true,
    },
    {
      id: 3,
      type: 'comment',
      message: 'Someone commented on your post: "My favorite books of 2023."',
      profileName:"Alejandro Fernandez",
      profileImage:"https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
      time: '2d',
      isRead: false,
    },
    {
      id: 4,
      type: 'follow',
      message: 'John Doe is now following you.',
      profileName:"John Doe",
      profileImage:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1378",
      time: '23h',
      isRead: true,
    },
    {
      id: 5,
      type: 'mention',
      message: 'You were mentioned in a comment by Jane Smith.',
      profileName:"Jane Smith",
      profileImage:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
      time: '2d',
      isRead: true,
    },
  ];
  
  export default notificationsData;