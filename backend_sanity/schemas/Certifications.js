export default {
    name: 'certifications',
    title: 'Certifications',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'certificateLink',
        title: 'Certtificate Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      
      {
        name: 'companies',
        title: 'Companies',
       type:'array',
       of: [
         {
           name:'company',
           title:'Company',
           type:'string'
         }
       ]
      },
     
    ],
  };