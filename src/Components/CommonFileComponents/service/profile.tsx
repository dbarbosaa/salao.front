
class ProfileService {

    image = "../../../assets/img/users/6.jpg"
    
    static image: string;

    static handleChange(ele) {
        const [file] = ele.target.files;
        this.image = URL.createObjectURL(file)
        this.returnImage()
    }

    static returnImage() {
        return this.image
    }

    static handleChangeUrl(link) {
        this.image = link
        this.returnImage()
    }

}
export default ProfileService;