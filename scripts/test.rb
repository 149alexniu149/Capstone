def func1
	i=0
	while i < 10 do
		puts "function 1"
		i=i+1
		sleep(1)
	end
end

def func2
	i=0
	while i < 10 do
		puts "function 2"
		i=i+1
		sleep(1)
	end
end
thread1=Thread.new{func1()}
thread2=Thread.new{func2()}

thread1.join
thread2.join