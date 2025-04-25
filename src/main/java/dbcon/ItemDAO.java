package dbcon;

import java.sql.*;

public class ItemDAO {
	
	String driver = "oracle.jdbc.driver.OracleDriver";
	String url = "jdbc:oracle:thin:@127.0.0.1:1521:xe";
	String user = "system";
	String pass = "1234";
	
	public ItemDAO() throws Exception {
		//1. 드라이버로딩
		Class.forName(driver);
	}
	
	public void insert(ItemVO vo) throws Exception {
		
		Connection con = null;
		PreparedStatement ps = null;
		
		try {
			//2. 연결객체 얻어오기
			con = DriverManager.getConnection(url, user, pass);
			//3. SQL 문장
			String sql = "INSERT INTO item"
					+ "	  VALUES(item_seq.nextval,?,?,?,?)";
			//4. 전송객체 얻어오기
			ps = con.prepareStatement(sql);
			ps.setString(1, vo.getName());
			ps.setString(2, vo.getItem());
			ps.setString(3, vo.getContent());
			ps.setString(4, vo.getStars());
			
			//5. 전송
			int result =ps.executeUpdate();
			ps.executeUpdate();
			
		}finally {
			//7. 닫기
			ps.close();
			con.close();
		}
		
		
		
		
	}
}
