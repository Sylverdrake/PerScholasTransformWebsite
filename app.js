
// DOM MANIPULATION

// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children


    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of mens pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.pJrDvHfBih0fbZEZbMub2AHaE7%26pid%3DApi&f=1&ipt=d733710c70c5bd3d881d720684362c4a53189893cc2d1fdaa901d5a6f12d7553&ipo=images",
            optionTags: ["Shoes", "Blouses", "Jeans", "Makeup"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lewVjQ4iHdCNvguRHTEQggHaE4%26pid%3DApi&f=1&ipt=dc7bd41d46ed44920f57ec2beef53501e5f9546c273b331ec2cb07b4f5687f71&ipo=images"
                },
                {
                    name: 'Boots',
                    pic: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F81joJVpNgOL._SL1500_.jpg&f=1&nofb=1&ipt=45099fe3e31ffd84b95b6756c4e3bea085ee0b69522333a004cca2b6079a1536&ipo=images"
                },
                {
                    name: 'Flannels',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F732d0e94-2f67-4654-86c3-8094d367b3bf.aacffd8c174d0ea2b8a6ca4fe365541b.jpeg&f=1&nofb=1&ipt=c7e534b865153afc3de328a997f8643a591e2d21e462bc564f5014616b4384eb&ipo=images"
                },
                {
                    name: 'Scarves',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F07566817-9636-45ff-9816-933e6337fa54_1.7b825b375d7ab52c7402291a79504b42.jpeg&f=1&nofb=1&ipt=fb202bd612a07c70191bf7e9be5a20bcf412e479dd573401a3e391f6eabb6d64&ipo=images"
                },
                {
                    name: 'Hoodies',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.warehouseone.com%2Fon%2Fdemandware.static%2F-%2FSites-master-catalog%2Fdefault%2Fdw3cc363dc%2Fwho%2F1210100103~090~1.jpg&f=1&nofb=1&ipt=7cd0686a4fd62f3c190521bfe412db4aeca392d50d691f41d5d4f49dac022478&ipo=images"
                },
                {
                    name: 'Hats',
                    pic: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.taghats.com%2Fwp-content%2Fuploads%2F2015%2F06%2FWomens-Wool-Panama-Hat1.jpg&f=1&nofb=1&ipt=65aeb0775dc79bd4d3bc1f5995da713e8ec50d563879144f099be2bb4966c754&ipo=images"
                },
            ],
            textDescription: 'Clothes for Women',
            lowImage: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-happy-womenwomenpeoplepersonsfemalehappy-1121525116123ywhzb.png&f=1&nofb=1&ipt=9a13fb60bfe23aff174f5c8e65173bd7844fdd34253a1c305062cf9270773be2&ipo=images'
        },
        kids: {
            headImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pZYes9W7fQ58XU6sTIlSvAHaE8%26pid%3DApi&f=1&ipt=adf66a89c8b726513602ee5c15922efcea8da7a236e98c71bc504a897c95ec8f&ipo=images",
            optionTags: ["Shoes", "Pants", "Shirts", "Toys"],
            productImages: [
                {
                    name: 'Shoes',
                    pic: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcouturepictures.com%2Fwp-content%2Fuploads%2F2015%2F02%2FNike-kids-Shoes-picture.jpg&f=1&nofb=1&ipt=3541206e6b32953af4171a749cffefbefad465df4d051ccf67a25ddf83b2d490&ipo=images"
                },
                {
                    name: 'Pants',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.67GbQvy-01bYAl_sZY_QjAHaF7%26pid%3DApi&f=1&ipt=2dcbbd08ade001cb8a191a6c063f2d6673fd27951b38fb918ce2621fa1bf5d0b&ipo=images"
                },
                {
                    name: 'Shirts',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1p4GurL5TBuNjSspmq6yDRVXab%2FColorful-Cartoon-Children-T-shirt-Popular-Cotton-Baby-Gift-Kids-T-shirt-for-Boys-Tees-Clothes.jpg&f=1&nofb=1&ipt=edfa62178b28f9c94f1367e2c538b99d275b8b91ca75770a75a5cd05adcd6dda&ipo=images"
                },
                {
                    name: 'Scarves',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JNU6sx7fUygzDijhA1bmUwHaF4%26pid%3DApi&f=1&ipt=036f656c81b4462233d2b9a6d6766b0432f9395a7151729ec0a8a8455e8a0c08&ipo=images"
                },
                {
                    name: 'Hoodies',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dY1PPKCa5rDjKfM1LOREwAHaF7%26pid%3DApi&f=1&ipt=1521896317029d691f78a392e70d87d631f2017784eda72b1b5fa85b55b892b5&ipo=images"
                },
                {
                    name: 'Toys',
                    pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F70913066-29c1-479e-a84e-ff604ccbe5cc_1.0380b99c3682a2efd30e98b26864458f.jpeg&f=1&nofb=1&ipt=157b1b9cf5232449437cd41f8f02460c4d2f83177bd17884222ad0818aad5f7d&ipo=images"
                },
            ],
            textDescription: 'Clothes for Kids',
            lowImage: ''
        }
    }
// -----------------------

let mainImage = document.querySelector('.mainImg')
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')






const changeAll = () => {
    changeTopPic()
    changeOptions()
    product()
}
    const changeTopPic = () =>{
        // createImage 
        let newimage = document.createElement('img')
            newimage.setAttribute('src', majorContainer.mens.headImage)
            newimage.setAttribute('class','topPic')
        // replaceWith current
        mainImage.replaceWith(newimage)

    }

    const changeOptions = () =>{
        majorContainer.mens.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        })
    }

    const product= () => {
        majorContainer.mens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        })
    }

// -----------------------

    const changeAll1 = () => {
        changeTopPic1()
        changeOptions1()
        product1()
    }
        const changeTopPic1 = () =>{
            // createImage 
            let newimage = document.createElement('img')
                newimage.setAttribute('src', majorContainer.womens.headImage)
                newimage.setAttribute('class','topPic')
            // replaceWith current
            mainImage.replaceWith(newimage)
    
        }
    
        const changeOptions1 = () =>{
            majorContainer.womens.optionTags.forEach((tagname)=>{
                // CREATE ELE
                let txt = document.createElement('div')
                txt.innerHTML = tagname
                // REPLACE ELEMENT WITH NEW ELEMENT
                option.append(txt)
            })
        }
    
        const product1= () => {
            majorContainer.womens.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
            })
        }

// -----------------------

        const changeAll2 = () => {
            changeTopPic2()
            changeOptions2()
            product2()
        }
            const changeTopPic2 = () =>{
                // createImage 
                let newimage = document.createElement('img')
                    newimage.setAttribute('src', majorContainer.kids.headImage)
                    newimage.setAttribute('class','topPic')
                // replaceWith current
                mainImage.replaceWith(newimage)
        
            }
        
            const changeOptions2 = () =>{
                majorContainer.kids.optionTags.forEach((tagname)=>{
                    // CREATE ELE
                    let txt = document.createElement('div')
                    txt.innerHTML = tagname
                    // REPLACE ELEMENT WITH NEW ELEMENT
                    option.append(txt)
                })
            }
        
            const product2 = () => {
                majorContainer.kids.productImages.forEach((obj)=>{
                    let shopBox  = document.createElement('img')
                    shopBox.setAttribute('src',obj.pic)
                    shopBox.setAttribute('class','product')
                    productBox.append(shopBox)
                })
            }