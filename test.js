import test from 'ava';
import thejameskyle from './';

test('title', t => {
	t.is(thejameskyle.firstName, 'James');
});
