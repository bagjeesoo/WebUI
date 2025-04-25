package dbcon;

public class ItemVO {
	private int no;
	private String name;
	private String item;
	private String content;
	private String stars;
	
	
	public ItemVO() {
		
	}
	
	public ItemVO(int no, String name, String item, String content, String stars) {
		super();
		this.no = no;
		this.name = name;
		this.item = item;
		this.content = content;
		this.stars = stars;
	}


	public int getNo() {
		return no;
	}


	public void setNo(int no) {
		this.no = no;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getItem() {
		return item;
	}


	public void setItem(String item) {
		this.item = item;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public String getStars() {
		return stars;
	}


	public void setStars(String stars) {
		this.stars = stars;
	}

	@Override
	public String toString() {
		return "ItemVO [no=" + no + ", name=" + name + ", item=" + item + ", content=" + content + ", stars=" + stars
				+ "]";
	}
	
	
}
